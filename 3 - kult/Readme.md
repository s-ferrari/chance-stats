# Herramienta de Cálculo de Probabilidades para Kult

Este script calcula la probabilidad de resultados al lanzar dos dados de 10 caras (d10) más un modificador opcional.

## Cómo funciona

- Se simulan todas las combinaciones posibles de tirar dos dados de 10 caras.
- A cada suma se le añade un modificador (por defecto 0).
- Se clasifican los resultados en tres categorías:
  - **Éxito completo:** resultado igual o mayor a 15.
  - **Éxito parcial:** resultado entre 10 y 14.
  - **Fallo:** resultado 9 o menor.
- El script cuenta cuántas combinaciones caen en cada categoría y muestra el total en porcentaje.

---
---

# Probability Calculation Tool for Kult

This script calculates the probability of outcomes when rolling two 10-sided dice (d10) plus an optional modifier.

## How it works

- It simulates all possible combinations of rolling two 10-sided dice.
- A modifier (default 0) is added to each sum.
- Results are classified into three categories:
  - **Full success:** result is 15 or higher.
  - **Partial success:** result is between 10 and 14.
  - **Failure:** result is 9 or lower.
- The script counts how many combinations fall into each category and displays the total as a percentage.
