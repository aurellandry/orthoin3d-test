from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Record
from .serializers import RecordSerializer


@api_view(['GET', 'POST'])
def get_records(request):
    if request.method == 'GET':
        records = Record.objects.all()
        serializedData = RecordSerializer(records, many=True).data
        return Response(serializedData)
    elif request.method == 'POST':
        return create_record(request.data)

@api_view(['GET', 'PUT', 'DELETE'])
def record_details(request, id):
    try:
        record = Record.objects.get(pk=id)
    except Record.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializedData = RecordSerializer(record).data
        return Response(serializedData)
    if request.method == 'DELETE':
        record.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PUT':
        data = request.data
        serializer = RecordSerializer(record, data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)    
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

def get_record(id):
    try:
        record = Record.objects.get(pk=id)
        serializedData = RecordSerializer(record).data
        return Response(serializedData)
    except Record.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
def create_record(data):
    serializer = RecordSerializer(data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
