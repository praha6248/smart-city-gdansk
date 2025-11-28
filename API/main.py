import math
from fastapi import FastAPI

app= FastAPI()

@app.get("/")

def root():
    return {"message": "Hello World"}

def main():
    {
        print("Hello")
    }

print(root())