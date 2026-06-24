from django.db import models
from apps.core.models import BaseModel

class Achievement(BaseModel):
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    achievement_type = models.CharField(max_length=255, db_index=True)
    external_url = models.URLField(max_length=500, blank=True, null=True)
    display_order = models.IntegerField(default=0, db_index=True)

    class Meta:
        db_table = 'achievements'
        ordering = ['display_order', '-created_at']

    def __str__(self):
        return self.title


class Certification(BaseModel):
    name = models.CharField(max_length=255)
    issuer = models.CharField(max_length=255, db_index=True)
    issue_date = models.DateField()
    certificate_url = models.URLField(max_length=500, blank=True, null=True)
    display_order = models.IntegerField(default=0)

    class Meta:
        db_table = 'certifications'
        ordering = ['display_order', '-issue_date']

    def __str__(self):
        return self.name
