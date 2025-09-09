# Herramienta de Cálculo de Probabilidades para Zweihander

Este script calcula las probabilidades de fallos, éxitos, éxitos críticos y fallos críticos basándose en simulaciones de tiradas de dados del 1 al 100 con un umbral objetivo.

## Cómo funciona

- Simula tiradas de dados del 1 al 100.
- Cuenta **éxitos críticos** cuando la tirada es 1 o múltiplo de 11 menor o igual al objetivo.
- Cuenta **fallos críticos** cuando la tirada es 100 o múltiplo de 11 mayor al objetivo.
- Las tiradas mayores al objetivo se cuentan como fallos.
- Las tiradas menores o iguales al objetivo (excepto éxitos críticos) se cuentan como éxitos.

---
---

# Probability Calculation Tool for Zweihander

This script calculates the probabilities of failures, successes, critical successes, and critical fails based on simulated dice rolls from 1 to 100 with a target threshold.

## How it works

- Simulates dice rolls from 1 to 100.
- Counts **critical successes** when the roll is 1 or a multiple of 11 less than or equal to the target.
- Counts **critical fails** when the roll is 100 or a multiple of 11 greater than the target.
- Rolls greater than the target are counted as failures.
- Rolls less than or equal to the target (excluding critical successes) are counted as successes.