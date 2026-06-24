from rest_framework.renderers import JSONRenderer

class EnvelopeJSONRenderer(JSONRenderer):
    def render(self, data, accepted_media_type=None, renderer_context=None):
        response = renderer_context.get('response') if renderer_context else None
        
        if response is not None:
            status_code = response.status_code
            if status_code == 204:
                return super().render(None, accepted_media_type, renderer_context)
            
            if status_code >= 400:
                # Error Response
                message = "An error occurred"
                errors = {}
                
                if isinstance(data, dict):
                    if "detail" in data:
                        message = data["detail"]
                        errors = {"non_field_errors": [message]}
                    elif "non_field_errors" in data:
                        message = data["non_field_errors"][0]
                        errors = data
                    else:
                        message = "Validation failed"
                        errors = data
                else:
                    message = str(data)
                    errors = {"non_field_errors": [message]}
                
                envelope = {
                    "success": False,
                    "message": message,
                    "errors": errors
                }
                return super().render(envelope, accepted_media_type, renderer_context)
        
        # Success Response
        # Check if already enveloped
        if isinstance(data, dict) and "success" in data and "data" in data:
            envelope = data
        else:
            message = "Request completed successfully"
            if isinstance(data, dict) and "message" in data:
                message = data.pop("message")
            
            # If data is a dict and has pagination keys (count, next, previous, results),
            # let's keep them in data or flatten them? The contract says:
            # results is nested inside data?
            # Wait, in the contract standard:
            # { "success": true, "data": [ ... ] }
            # For paginated results:
            # { "count": 100, "next": "...", "previous": null, "results": [] }
            # Wait! The pagination standard in 6_API_CONTRACT.md shows:
            # Pagination Standard
            # Request: ?page=1&page_size=10
            # Response:
            # {
            #   "count": 100,
            #   "next": "http://api.example.com/api/v1/projects?page=2",
            #   "previous": null,
            #   "results": []
            # }
            # Wait, is this paginated response also enveloped?
            # If so, it would be under "data" or root?
            # Let's support both. If data is a dict with count/next/previous/results,
            # we can envelope it under data or wrap it.
            # Let's wrap it in the envelope as the "data" attribute! E.g.:
            # { "success": true, "message": "...", "data": { "count": ..., "next": ..., "results": [] } }
            # Let's make sure if data has "results", we wrap the entire dict as "data".
            envelope = {
                "success": True,
                "message": message,
                "data": data
            }
            
        return super().render(envelope, accepted_media_type, renderer_context)
