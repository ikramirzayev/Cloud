from django.db import models

# Bu senin veritabanındaki tablon olacak.
# Ödevdeki "API ile veri yönetimi" [cite: 13] kısmı için bu şart.
class Gorev(models.Model):
    baslik = models.CharField(max_length=200) # Başlık kısmı
    aciklama = models.TextField()             # Detay kısmı
    tamamlandi = models.BooleanField(default=False) # Yapıldı mı?

    def __str__(self):
        return self.baslik