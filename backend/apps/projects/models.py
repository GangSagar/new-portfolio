import uuid
from django.db import models
from apps.core.models import BaseModel

class Technology(BaseModel):
    name = models.CharField(max_length=255, unique=True)
    slug = models.CharField(max_length=255, unique=True, db_index=True)
    icon_name = models.CharField(max_length=255, blank=True, null=True)
    category = models.CharField(max_length=255, db_index=True)

    class Meta:
        db_table = 'technologies'
        verbose_name_plural = 'technologies'

    def __str__(self):
        return self.name


class Project(BaseModel):
    title = models.CharField(max_length=255)
    slug = models.CharField(max_length=255, unique=True, db_index=True)
    short_description = models.TextField()
    full_description = models.TextField()
    github_url = models.URLField(max_length=500, blank=True, null=True)
    live_url = models.URLField(max_length=500, blank=True, null=True)
    thumbnail_url = models.CharField(max_length=500, blank=True, null=True)
    featured = models.BooleanField(default=False, db_index=True)
    display_order = models.IntegerField(default=0, db_index=True)
    status = models.CharField(max_length=50, default='active')
    technologies = models.ManyToManyField(Technology, related_name='projects', blank=True)

    class Meta:
        db_table = 'projects'
        ordering = ['display_order', '-created_at']

    def __str__(self):
        return self.title


class ProjectMetric(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='metrics')
    metric_name = models.CharField(max_length=255)
    metric_value = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = 'project_metrics'

    def __str__(self):
        return f"{self.project.title} - {self.metric_name}: {self.metric_value}"
