import { useState } from "react";

function Bank() {
    const [BankList, setBankList] = useState()

    const getBank = (id) => {
        fetch("https://api.sampleapis.com/fakebank/accounts")
            .then(response => response.json())
            .then(setBankList)
            .catch(console.error)
    }

    return (
        <>
        <div className="button-List">
            {Bank.map(BankList => (
                <button key={Bank} onClick={() => getBank(Bank)}>Click</button>
            ))}
            <section id="Bank">
                <h1>Hello Click Below</h1>
                <button onClick={getBank}>
                    Click me
                </button>
            </section>
            </div>
        </>
    )
    
}

export default Bank