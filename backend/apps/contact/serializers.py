from rest_framework import serializers
from apps.contact.models import ContactMessage, ResumeDownload

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'message', 'status', 'created_at']
        read_only_fields = ['id', 'status', 'created_at']

    def validate_name(self, value):
        if not value.strip():
            raise serializers.ValidationError("Name cannot be empty.")
        return value

    def validate_message(self, value):
        if not value.strip():
            raise serializers.ValidationError("Message cannot be empty.")
        return value


class ResumeDownloadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResumeDownload
        fields = ['id', 'session_id', 'country', 'city', 'downloaded_at']
        read_only_fields = ['id', 'downloaded_at']
