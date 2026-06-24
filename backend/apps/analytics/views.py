from rest_framework import viewsets, status
from rest_framework.response import Response
from apps.analytics.serializers import AnalyticsEventSerializer
from apps.analytics.services import AnalyticsEventService

class AnalyticsEventViewSet(viewsets.GenericViewSet):
    serializer_class = AnalyticsEventSerializer

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.service = AnalyticsEventService()

    def create(self, request):
        serializer = AnalyticsEventSerializer(data=request.data)
        if serializer.is_valid():
            event_obj = self.service.log_event(
                event_name=serializer.validated_data['event_name'],
                page=serializer.validated_data['page'],
                session_id=serializer.validated_data.get('session_id'),
                metadata=serializer.validated_data.get('metadata')
            )
            # Match contract response format
            return Response({
                "success": True,
                "message": "Event logged successfully"
            }, status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
