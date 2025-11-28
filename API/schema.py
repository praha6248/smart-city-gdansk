from pydantic import BaseModel
from datetime import datetime

class Dzielnica(BaseModel):
    id: int
    nazwa: str
    lokalizacja: dict

    class Config:
        orm_mode = True

class Zdarzenie(BaseModel):
    id: int
    nazwa: str

    class Config:
        orm_mode = True

class Zgloszenie(BaseModel):
    id = int
    typ = int
    opis = str
    data = datetime
    lokalizacja = dict

    class Config:
        orm_mode = True