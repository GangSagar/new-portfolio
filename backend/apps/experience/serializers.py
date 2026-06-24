from rest_framework import serializers
from apps.experience.models import Experience
from apps.projects.serializers import TechnologySerializer

class ExperienceSerializer(serializers.ModelSerializer):
    technologies = TechnologySerializer(many=True, read_only=True)

    class Meta:
        model = Experience
        fields = [
            'id', 'company_name', 'role', 'employment_type', 'location',
            'start_date', 'end_date', 'currently_working', 'description',
            'display_order', 'technologies', 'created_at', 'updated_at'
        ]
