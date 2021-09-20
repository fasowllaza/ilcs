import React, { useEffect, useState } from "react"

const fetch_url = "http://localhost:3001/getSppDoc"

export default function Homepage(){
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([])
    
    useEffect(() =>{
        setLoading(true)
        fetch(`${fetch_url}`)
        .then(response => response.json())
        .then(data => {
            setData(data)
            setTimeout(() =>{
                setLoading(false)
            }, 1000)
        })

    }, [])

    return (
        loading? (
            ""

        ) : (
            <table>
            <tr>
              <th>ID Dokumen</th>
              <th>Nama Dokumen</th>
            </tr>
            {
                data.map(dokumen =>{
                    return (
                        <tr>
                            <td>{dokumen.ID_DOKUMEN}</td>
                            <td>{dokumen.NAMA_DOKUMEN}</td>
                        </tr>

                    )
                })
            }

          </table> 
        )

    )
}