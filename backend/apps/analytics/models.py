import uuid
from django.db import models

class AnalyticsEvent(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    event_name = models.CharField(max_length=255, db_index=True)
    page = models.CharField(max_length=255, db_index=True)
    session_id = models.CharField(max_length=255, blank=True, null=True)
    metadata = models.JSONField(default=dict, blank=True)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        db_table = 'analytics_events'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.event_name} on {self.page} at {self.created_at}"
