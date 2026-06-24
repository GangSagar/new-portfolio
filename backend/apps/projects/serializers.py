from rest_framework import serializers
from apps.projects.models import Technology, Project, ProjectMetric

class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ['id', 'name', 'slug', 'icon_name', 'category']


class ProjectMetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectMetric
        fields = ['metric_name', 'metric_value']


class ProjectSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, read_only=True)
    metrics = ProjectMetricSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'slug', 'short_description', 'full_description',
            'github_url', 'live_url', 'thumbnail_url', 'featured',
            'display_order', 'status', 'technologies', 'metrics',
            'created_at', 'updated_at'
        ]
