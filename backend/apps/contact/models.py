import uuid
from django.db import models

class ContactMessage(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255, db_index=True)
    message = models.TextField()
    status = models.CharField(max_length=50, default='unread', db_index=True)
    ip_hash = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        db_table = 'contact_messages'
        ordering = ['-created_at']

    def __str__(self):
        return f"Message from {self.name} ({self.email})"


class ResumeDownload(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    session_id = models.CharField(max_length=255, blank=True, null=True)
    ip_hash = models.CharField(max_length=255)
    country = models.CharField(max_length=255, blank=True, null=True, db_index=True)
    city = models.CharField(max_length=255, blank=True, null=True)
    downloaded_at = models.DateTimeField(auto_now_add=True, db_index=True)

    class Meta:
        db_table = 'resume_downloads'
        ordering = ['-downloaded_at']

    def __str__(self):
        return f"Download tracked at {self.downloaded_at}"
