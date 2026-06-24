from rest_framework import serializers
from apps.skills.models import Skill

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = [
            'id', 'name', 'category', 'icon_name', 'years_of_experience',
            'display_order', 'created_at', 'updated_at'
        ]
