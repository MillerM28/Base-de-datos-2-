db.operadores.insertMany([
  // Operadores Lógicos
  {
    nombre: "$or",
    tipo: "lógico",
    descripcion: "Devuelve verdadero si al menos una de las expresiones es verdadera.",
    sintaxis: {
      "$or": [
        { "campo1": { "$condicion": "valor" } },
        { "campo2": { "$condicion": "valor" } }
      ]
    },
    ejemplo: {
      consulta: {
        "$or": [
          { "ciudad": "Bogotá" },
          { "ciudad": "Medellín" }
        ]
      },
      explicacion: "Documentos donde ciudad sea 'Bogotá' o 'Medellín'."
    }
  },
  {
    nombre: "$not",
    tipo: "lógico",
    descripcion: "Invierte el resultado de una expresión.",
    sintaxis: {
      "campo": { "$not": { "$condicion": "valor" } }
    },
    ejemplo: {
      consulta: {
        "activo": { "$not": { "$eq": true } }
      },
      explicacion: "Documentos donde 'activo' no sea true."
    }
  },
  {
    nombre: "$nor",
    tipo: "lógico",
    descripcion: "Devuelve verdadero si todas las expresiones son falsas.",
    sintaxis: {
      "$nor": [
        { "campo1": { "$condicion": "valor" } },
        { "campo2": { "$condicion": "valor" } }
      ]
    },
    ejemplo: {
      consulta: {
        "$nor": [
          { "estado": "inactivo" },
          { "edad": { "$lt": 18 } }
        ]
      },
      explicacion: "Documentos donde estado no sea 'inactivo' y edad >= 18."
    }
  },

  // Operadores de Comparación
  {
    nombre: "$eq",
    tipo: "comparación",
    descripcion: "Compara si un campo es igual a un valor.",
    sintaxis: {
      "campo": { "$eq": "valor" }
    },
    ejemplo: {
      consulta: { "nombre": { "$eq": "Ana" } },
      explicacion: "Documentos donde nombre sea exactamente 'Ana'."
    }
  },
  {
    nombre: "$ne",
    tipo: "comparación",
    descripcion: "Compara si un campo NO es igual a un valor.",
    sintaxis: {
      "campo": { "$ne": "valor" }
    },
    ejemplo: {
      consulta: { "nombre": { "$ne": "Ana" } },
      explicacion: "Documentos donde nombre no sea 'Ana'."
    }
  },
  {
    nombre: "$gt",
    tipo: "comparación",
    descripcion: "Mayor que.",
    sintaxis: {
      "campo": { "$gt": "valor" }
    },
    ejemplo: {
      consulta: { "edad": { "$gt": 30 } },
      explicacion: "Documentos donde edad sea mayor que 30."
    }
  },
  {
    nombre: "$gte",
    tipo: "comparación",
    descripcion: "Mayor o igual que.",
    sintaxis: {
      "campo": { "$gte": "valor" }
    },
    ejemplo: {
      consulta: { "edad": { "$gte": 18 } },
      explicacion: "Documentos donde edad sea 18 o mayor."
    }
  },
  {
    nombre: "$lt",
    tipo: "comparación",
    descripcion: "Menor que.",
    sintaxis: {
      "campo": { "$lt": "valor" }
    },
    ejemplo: {
      consulta: { "edad": { "$lt": 18 } },
      explicacion: "Documentos donde edad sea menor que 18."
    }
  },
  {
    nombre: "$lte",
    tipo: "comparación",
    descripcion: "Menor o igual que.",
    sintaxis: {
      "campo": { "$lte": "valor" }
    },
    ejemplo: {
      consulta: { "edad": { "$lte": 65 } },
      explicacion: "Documentos donde edad sea 65 o menor."
    }
  },
  {
    nombre: "$in",
    tipo: "comparación",
    descripcion: "Verifica si el valor del campo está en una lista de valores.",
    sintaxis: {
      "campo": { "$in": ["valor1", "valor2"] }
    },
    ejemplo: {
      consulta: { "ciudad": { "$in": ["Bogotá", "Cali"] } },
      explicacion: "Documentos donde ciudad sea 'Bogotá' o 'Cali'."
    }
  },
  {
    nombre: "$nin",
    tipo: "comparación",
    descripcion: "Verifica si el valor del campo NO está en una lista de valores.",
    sintaxis: {
      "campo": { "$nin": ["valor1", "valor2"] }
    },
    ejemplo: {
      consulta: { "ciudad": { "$nin": ["Bogotá", "Cali"] } },
      explicacion: "Documentos donde ciudad no sea ni 'Bogotá' ni 'Cali'."
    }
  }
])
