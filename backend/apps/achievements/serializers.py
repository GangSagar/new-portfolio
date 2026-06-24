from rest_framework import serializers
from apps.achievements.models import Achievement, Certification

class AchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Achievement
        fields = ['id', 'title', 'description', 'achievement_type', 'external_url', 'display_order', 'created_at', 'updated_at']


class CertificationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Certification
        fields = ['id', 'name', 'issuer', 'issue_date', 'certificate_url', 'display_order', 'created_at', 'updated_at']
