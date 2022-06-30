/**
 * TextField
 *
 * Баярхүү.Лув, 2022.01.17 16:09
 */

export default function TextField({
                                      classNameWrap,
                                      classNameLabel,
                                      caption,
                                      captionInline,
                                      style,
                                      styleWrap,
                                      className,
                                      placeholder,
                                      name,
                                      onChange,
                                      onInput,
                                      type,
                                      value,
                                      maxLength,
                                      min,
                                      readOnly,
                                      onSubmit
                                  }) {

    const inlineStyle = () => {
        if (captionInline) {
            return {
                display: 'flex',
                alignItems: "center"
            }
        }
        if (styleWrap) {
            return styleWrap
        }
    };

    return (
        <div style={inlineStyle()} className={classNameWrap}>
            {caption || captionInline ? <label className={classNameLabel} style={{
                display: "block",
                paddingBottom: "5px"
            }}>{caption || captionInline}</label> : null}
            <input onInput={onInput} readOnly={readOnly} min={min} maxLength={maxLength} value={value}
                   onChange={onChange} placeholder={placeholder} style={style} className={`input ${className}`}
                   name={name} type={type}
                   onKeyUp={(e) => e.key === "Enter" && onSubmit && onSubmit(e)}/>
        </div>
    );
}