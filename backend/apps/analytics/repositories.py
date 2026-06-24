from apps.analytics.models import AnalyticsEvent

class AnalyticsEventRepository:
    @staticmethod
    def create_event(event_name, page, session_id=None, metadata=None):
        if metadata is None:
            metadata = {}
        return AnalyticsEvent.objects.create(
            event_name=event_name,
            page=page,
            session_id=session_id,
            metadata=metadata
        )
