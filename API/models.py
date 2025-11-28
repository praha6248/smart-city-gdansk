from sqlalchemy import Column, DateTime, ForeignKey, Integer, String, Float, Serial
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func
from geoalchemy2 import Geometry

Baza = declarative_base()

class Dzielnica(Baza):
    __tablename__ = 'dzielnice'
    id = Column(Integer, primary_key = True, index = True, nullable=False)
    nazwa = Column(String(50), nullable=False)
    lokalizacja = Column(Geometry(geometry_type="POLYGON", srid=4326), nullable = False)

class Zdarzenie(Baza):
    __tablename__ = 'zdarzenie'
    id = Column(Integer, primary_key = True, index= True, nullable = False)
    nazwa = Column(String(50), nullable=False)

class Zgloszenie(Baza):
    __tablename__='zgloszenie'
    id = Column(Integer, primary_key = True, index= True, nullable = False)
    typ = Column(Integer,  ForeignKey('zdarzenie.id'), nullable = False)
    opis = Column(String(300), nullable = False)
    data = Column(DateTime(timezone=True), server_default=func.now(), nullable=False)
    lokalizacja = Column(Geometry(geometry_type="POLYGON", srid=4326), nullable = False)

