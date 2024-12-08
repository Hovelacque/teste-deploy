import { useState } from 'react'
import Swal from 'sweetalert2'
import './index.css'

export default function Roleta({ saldo, setSaldo }) {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)
    const [n4, setN4] = useState(0)
    const [valorAposta, setValorAposta] = useState(10)

    const percertagemDeSorte = 50;
    // const valorAposta = 10;
    const multiplicadorGanho = 10;

    const girar = () => {
        if (saldo >= valorAposta) {
            setSaldo(saldo - valorAposta)
            let _n1 = Math.floor(Math.random() * 10)
            let _n2 = Math.floor(Math.random() * 10)
            let _n3 = Math.floor(Math.random() * 10)
            let _n4 = Math.floor(Math.random() * 10)

            const sorteExtra = Math.floor(Math.random() * 100)
            if (sorteExtra <= percertagemDeSorte) {
                const numeroFajuto = Math.floor(Math.random() * 10)
                _n1 = numeroFajuto
                _n2 = numeroFajuto
                _n3 = numeroFajuto
                _n4 = numeroFajuto
            }

            if (_n1 == _n2 && _n1 == _n3 && _n1 == _n4) {
                const ganhoReal = valorAposta * multiplicadorGanho
                setSaldo(saldo + ganhoReal)
                Swal.fire({
                    title: "Boa!!!",
                    text: `Parabéns você ganhou R$${ganhoReal}`,
                    icon: "success"
                });
            }

            setN1(_n1)
            setN2(_n2)
            setN3(_n3)
            setN4(_n4)
        }
        else {
            Swal.fire({
                title: "Atenção",
                text: "Você não tem saldo suficiente, faça um PIX para continuar...",
                icon: "warning"
            });
        }
    }

    const alteraValorDaAposta = (value) => {
        const valor = value.target.value
        if (valor < 10) {
            Swal.fire({
                title: "Atenção",
                text: "o valor minimo de aposta é R$10",
                icon: "info"
            });
            setValorAposta(10)
        }
        else
            setValorAposta(valor)
    }

    return (
        <>
            <div className='roleta'>
                <h1>{n1}</h1>
                <h1>{n2}</h1>
                <h1>{n3}</h1>
                <h1>{n4}</h1>
            </div>
            <div>
                <label>Valor aposta:</label>
                <input type='text' value={valorAposta} onChange={(v) => setValorAposta(v.target.value)} onBlur={alteraValorDaAposta} />
                <button onClick={girar}>GIRAR</button>
            </div>
        </>
    )
}