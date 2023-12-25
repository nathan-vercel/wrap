export default function Stat({number, tagline, color1, color2}: any) {
    return (
        <div style={{
            color: color1,
            backgroundColor: color2,
            padding: "5px",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "start"
        }}>
            <h1 className='font-bold text-5xl pt-4 pl-2'>{number}</h1>
            <p className='text-md text-black pl-4 pt-2'>{tagline}</p>
        </div>
    )
}