const carsListMock = [
    {
        "status": true,
        "result": {
            "veiculo": {
                "placa": "LSO6I92",
                "renavam": "01089855947"
            },
            "multas": [
                {
                    "ait": "K30462058",
                    "placa": "LSO6I92",
                    "cpf_cnpj": "056.588.037-30",
                    "valor_original": 203.03,
                    "valor": 203.03,
                    "vencimento": "05/08/2019",
                    "status_pagamento": "vencida",
                    "situacao": "não disponível",
                    "renainf": "não disponível",
                    "data_pgto_desconto": "não disponível",
                    "enquadramento": "não disponível",
                    "data_infracao": "não disponível",
                    "hora_infracao": "não disponível",
                    "descricao": "não disponível",
                    "local": "RJ",
                    "orgao_emissor": "não disponível",
                    "agente_emissor": "não disponível"
                }
            ],
            "ipvas": [
                {
                    "ano": 2020,
                    "valor": 1450.15
                }
            ],
            "licenciamentos": [
                {
                    "ano": 2020,
                    "valor": 210.48
                }
            ],
            "dpvats": [
                {
                    "ano": "2020",
                    "valor": 5.23
                }
            ],
            "dividaativa": []
        }

    },
    {
        "status": true,
        "result": {
            "veiculo": {
                "placa": "KXY7559",
                "renavam": "01089453688"
            },
            "multas": [
                {
                    "ait": "K30913221",
                    "placa": "KXY7559",
                    "cpf_cnpj": "122.588.438-55",
                    "valor_original": 203.03,
                    "valor": 203.03,
                    "vencimento": "05/08/2019",
                    "status_pagamento": "vencida",
                    "situacao": "não disponível",
                    "renainf": "não disponível",
                    "data_pgto_desconto": "não disponível",
                    "enquadramento": "não disponível",
                    "data_infracao": "não disponível",
                    "hora_infracao": "não disponível",
                    "descricao": "não disponível",
                    "local": "SP",
                    "orgao_emissor": "não disponível",
                    "agente_emissor": "não disponível"
                }
            ],
            "ipvas": [
                {
                    "ano": 2020,
                    "valor": 1450.15
                }
            ],
            "licenciamentos": [
                {
                    "ano": 2020,
                    "valor": 210.48
                }
            ],
            "dpvats": [
                {
                    "ano": "2020",
                    "valor": 5.23
                }
            ],
            "dividaativa": []
        }

    }
]


module.exports = new class Database {
    constructor(Car) {
        this.Car = carsListMock
    }

    find() {
        return carsListMock
    };

    findByPlateNumber(plateNumber) {
        return carsListMock.filter(carro => carro.result.veiculo.placa === plateNumber)
    }

    findByPlaceOfOrigin(place) {
        return carsListMock.filter(carro => carro.result.multas[0].local === place)
    }
}
