from django.db import models
from apps.core.models import BaseModel
from apps.projects.models import Technology

class Experience(BaseModel):
    company_name = models.CharField(max_length=255, db_index=True)
    role = models.CharField(max_length=255)
    employment_type = models.CharField(max_length=100)
    location = models.CharField(max_length=255, blank=True, null=True)
    start_date = models.DateField()
    end_date = models.DateField(blank=True, null=True)
    currently_working = models.BooleanField(default=False)
    description = models.TextField()
    display_order = models.IntegerField(default=0, db_index=True)
    technologies = models.ManyToManyField(Technology, related_name='experiences', blank=True)

    class Meta:
        db_table = 'experience'
        ordering = ['display_order', '-start_date']

    def __str__(self):
        return f"{self.role} at {self.company_name}"
