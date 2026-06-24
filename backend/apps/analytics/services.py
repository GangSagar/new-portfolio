from apps.analytics.repositories import AnalyticsEventRepository

class AnalyticsEventService:
    def __init__(self):
        self.repository = AnalyticsEventRepository()

    def log_event(self, event_name, page, session_id=None, metadata=None):
        return self.repository.create_event(
            event_name=event_name,
            page=page,
            session_id=session_id,
            metadata=metadata
        )
