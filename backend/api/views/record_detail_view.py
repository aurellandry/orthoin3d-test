from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..services.record_service import RecordService


class RecordDetailView(APIView):
    """
    Handles GET, PUT, DELETE for individual records at /records/<id> endpoint
    """

    def get(self, request, id):
        record = RecordService.get_record(id)
        if record is None:
            return Response(status=status.HTTP_404_NOT_FOUND)
        return Response(record)

    def put(self, request, id):
        data, status_code = RecordService.update_record(request.data, id)
        return Response(data, status=status_code)

    def delete(self, request, id):
        status_code = RecordService.delete_record(id)
        return Response(status=status_code)
