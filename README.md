# Matrix Operations Library (TDD Approach)

This repository contains a custom Matrix operations library developed using the **Test-Driven Development (TDD)** methodology with Mocha and Chai.

## Overview

The development process strictly adheres to the **Red-Green-Refactor** cycle:
1. **Red**: Writing automated unit tests before code implementation.
2. **Green**: Implementing the minimum required code to make tests pass.
3. **Refactor**: Optimizing logic and structure while maintaining passing tests.

### Supported Features
- Matrix initialization, storage, and input data validation.
- Matrix addition with dimension compatibility checks.
- Matrix transposition (rectangular matrices).

## Tech Stack

- **Runtime**: Node.js
- **Test Runner**: Mocha (`^12.0.3`)
- **Assertion Library**: Chai (`^6.3.0` / BDD `expect` interface)

## TDD Commit Flow

The repository commit history reflects the iterative development process:
- `feat(matrix): add tests for matrix constructor (RED)`
- `feat(matrix): implement matrix constructor and dimension validation (GREEN)`
- `feat(addition): test matrix addition operation (RED)`
- `feat(addition): implement matrix addition logic (GREEN)`
- `refactor(addition): simplify addition matrix traversal using map (REFACTOR)`
- `feat(transpose): test rectangular matrix transposition (RED)`
- `feat(transpose): implement matrix transposition logic (GREEN)`

## Setup & Execution

1. Clone the repository:
```bash
git clone <repository_url>
cd matrix-tdd-lab2
