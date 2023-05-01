import { FC, useState, useRef } from 'react';
import styles from './index.module.scss'
import { Range, getTrackBackground, useThumbOverlap } from 'react-range';

const STEP = 1000;
const MIN = 0;
const MAX = 200000;

const ThumbLabel = ({
  rangeRef,
  values,
  index
}: {
  rangeRef: Range | null;
  values: number[];
  index: number;
}) => {
  const [labelValue, labelStyle] = useThumbOverlap(
    rangeRef,
    values,
    index,
    0,
    ' - ',
    (value) => `${value}`
  );

  return (
    <div
      data-label={index}
      style={{
        display: 'block',
        position: 'absolute',
        top: '-30px',
        color: '#fff',
        fontSize: '12px',
        fontFamily: 'IviSans-light,Arial,Helvetica Neue,Helvetica,sans-serif',
        padding: '6px',
        borderRadius: '5px',
        backgroundColor: '#2e2844',
        whiteSpace: 'nowrap',
        ...(labelStyle as React.CSSProperties)
      }}
    >
      {index === 1 ? `более ${labelValue}` : `от ${labelValue}`}
    </div>
  );
};

const RangeScore: FC<{ rtl: boolean }> = ({ rtl }) => {
  const [values, setValues] = useState([10000, 200000]);
  const [finalValues, setFinalValues] = useState([10000, 200000]);
  const rangeRef: any = useRef<Range>();

  return (
    <div className={styles.rangeContainer}>
      <h3 className={styles.title}>Количество оценок</h3>
      <Range
        ref={rangeRef}
        step={STEP}
        min={MIN}
        max={MAX}
        values={values}
        rtl={rtl}
        onChange={(values) => setValues(values)}
        onFinalChange={(values) => setFinalValues(values)}

        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            style={{
              ...props.style,
              height: '40px',
              display: 'flex',
              width: '90%'
            }}
          >
            <div
              ref={props.ref}
              style={{
                height: '6px',
                width: '100%',
                borderRadius: '4px',
                background: getTrackBackground({
                  values,
                  colors: ['#a5a1b2', '#ea003d', '#a5a1b2'],
                  min: MIN,
                  max: MAX,
                  rtl
                }),
                alignSelf: 'center'
              }}
            >
              {children}
            </div>
          </div>
        )}

        renderThumb={({ props, index, isDragged }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '25px',
              width: '10px',
              borderRadius: '4px',
              backgroundColor: '#a5a1b2',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <ThumbLabel
              rangeRef={rangeRef.current}
              values={values}
              index={index}
            />
            <div
              style={{
                height: '16px',
                width: '5px',
                backgroundColor: isDragged ? '#ea003d' : '#a5a1b2'
              }}
            />
          </div>
        )}
      />
    </div>
  );
};

export default RangeScore;