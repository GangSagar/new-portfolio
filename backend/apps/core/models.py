import uuid
from django.db import models


class BaseModelQuerySet(models.QuerySet):
    def delete(self):
        return self.update(is_deleted=True)

class BaseModelManager(models.Manager):
    def get_queryset(self):
        return BaseModelQuerySet(self.model, using=self._db).filter(is_deleted=False)

class BaseModel(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField(default=True)
    is_deleted = models.BooleanField(default=False)

    # Managers
    objects = BaseModelManager()
    all_objects = models.Manager()

    class Meta:
        abstract = True

    def delete(self, force=False, *args, **kwargs):
        if force:
            return super().delete(*args, **kwargs)
        self.is_deleted = True
        self.save()
        return (1, {self._meta.label: 1})


class SocialLink(BaseModel):
    platform = models.CharField(max_length=50, db_index=True)
    url = models.URLField(max_length=500)
    icon_name = models.CharField(max_length=100, blank=True, null=True)
    display_order = models.IntegerField(default=0)

    class Meta:
        db_table = 'social_links'
        ordering = ['display_order', 'platform']

    def __str__(self):
        return self.platform


class SiteConfiguration(BaseModel):
    config_key = models.CharField(max_length=255, unique=True, db_index=True)
    config_value = models.TextField()

    class Meta:
        db_table = 'site_configurations'

    def __str__(self):
        return self.config_key
