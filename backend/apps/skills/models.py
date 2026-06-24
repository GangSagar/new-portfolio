from django.db import models
from apps.core.models import BaseModel

class Skill(BaseModel):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255, db_index=True)
    icon_name = models.CharField(max_length=255, blank=True, null=True)
    years_of_experience = models.IntegerField(default=0)
    display_order = models.IntegerField(default=0, db_index=True)

    class Meta:
        db_table = 'skills'
        ordering = ['display_order', 'name']

    def __str__(self):
        return self.name
