from ..models import Record

class RecordRepository():
    @staticmethod
    def get(id):
        return Record.objects.get(pk=id)
    
    @staticmethod
    def getAll():
        return Record.objects.all()
    
    @staticmethod
    def delete(id):
        record = RecordRepository.get(id)
        record.delete()
    