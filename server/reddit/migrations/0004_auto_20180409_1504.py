# Generated by Django 2.0.4 on 2018-04-09 15:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reddit', '0003_auto_20180409_0123'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='text',
            field=models.CharField(max_length=300),
        ),
    ]