from rest_framework import status
from ..models import Record
from ..serializers import RecordSerializer
from ..repositories.record_repository import RecordRepository

class RecordService:
    
    @staticmethod
    def get_all_records():
        records = RecordRepository.getAll()
        return RecordSerializer(records, many=True).data

    @staticmethod
    def get_record(id):
        try:
            record = RecordRepository.get(id)
            return RecordSerializer(record).data
        except Record.DoesNotExist:
            return None

    @staticmethod
    def create_record(data):
        serializer = RecordSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return serializer.data, status.HTTP_201_CREATED
        return serializer.errors, status.HTTP_400_BAD_REQUEST

    @staticmethod
    def update_record(data, id):
        try:
            record = RecordRepository.get(id)
        except Record.DoesNotExist:
            return None, status.HTTP_404_NOT_FOUND

        serializer = RecordSerializer(record, data=data)
        if serializer.is_valid():
            serializer.save()
            return serializer.data, status.HTTP_200_OK
        return serializer.errors, status.HTTP_400_BAD_REQUEST

    @staticmethod
    def delete_record(id):
        try:
            RecordRepository.delete(id)
            return status.HTTP_204_NO_CONTENT
        except Record.DoesNotExist:
            return status.HTTP_404_NOT_FOUND
