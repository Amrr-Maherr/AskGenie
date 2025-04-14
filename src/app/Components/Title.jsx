export default function Title({text,size,font,color}) {
    return (
        <>
        <p className={`${size} ${font} ${color}`}>{text}</p>
        </>
    )
}