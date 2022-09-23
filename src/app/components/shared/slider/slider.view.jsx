import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import sliderStyles from './slider.styles'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const SliderView = (props) => {
  const { activeStep, handleStepChange, data } = props;
  const classes = sliderStyles();
  const theme = useTheme();

  return (
    <AutoPlaySwipeableViews
      axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
      index={activeStep}
      onChangeIndex={handleStepChange}
      enableMouseEvents
      className={classes.view}
    >
      {data.map((item, index) => (
        <div className={classes.container} key={item.label}>
          {Math.abs(activeStep - index) <= 2 ? (
            <>
              <Typography className={classes.label}>{item.label}</Typography>
              <p className={classes.subLabel}>{item.subLabel}</p>
            </>
          ) : null}
        </div>
      ))}
    </AutoPlaySwipeableViews>
  );
}

export default SliderView;
