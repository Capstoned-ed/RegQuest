const Prediction = ({ label, result, confidence }) => {
    return (
        <section style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <h4 style={{ margin: 0, fontSize: '0.85rem', color: '#1E15C5', fontWeight: 700 }}>{label}</h4>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: '#495057', fontWeight: 600 }}>{result}</span>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#3CC15E', color: 'white', padding: '0.15rem 0.4rem', borderRadius: '4px', fontWeight: 700 }}>
                    {confidence}% Acc
                </span>
            </div>
        </section>
    )
}

export default Prediction