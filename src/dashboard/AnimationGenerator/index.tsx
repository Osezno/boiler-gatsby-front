/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext, createContext } from 'react'

import { navigate } from 'gatsby'
import { View, Text } from '../../components/common'
import { colors } from './constants'
import { Styles } from '../../components/common/style'
/*
const Block = ({ index, mouseDown, colorNumber, setColor, returnColor }) => {

  const colorKey = Object.keys(colors)[colorNumber]

  return <View css={Styles.color(colors[colorKey])}
    onClick={() => setColor(index)}
    onMouseEnter={(event) => {
      if (mouseDown) setColor(index)
    }} />
}

returnColor={(index: number) =>
                  setAnimation(ani => {
                    const updatedAnimation = Object.assign({}, ani);
                    updatedAnimation[currentFrame][index][1] = selectedColor
                    console.log(updatedAnimation)
                    return updatedAnimation
                  })
                }

*/
const ColorContext = createContext(19);

const Block = ({ index, mouseDown, colorNumber }) => {

  const [color, setColor] = useState(colorNumber)
  const colorKey = Object.keys(colors)[color]
  
  return <ColorContext.Consumer>
    {value => <View css={Styles.color(colors[colorKey])}
      onClick={() => setColor(value)}
      onMouseEnter={(event) => {
        if (mouseDown) setColor(value)
      }} />}</ColorContext.Consumer >
}
/*
const Frame = ({ }) => {
  return <View css={Styles.frame}>
    {animation[currentFrame].map((a, i) => {
      return <Block index={i} colorNumber={a[1]}
        setColor={(index: number) =>
          setAnimation(ani => {
            const updatedAnimation = Object.assign({}, ani);
            updatedAnimation[currentFrame][index][1] = selectedColor
            return updatedAnimation
          })
        }
        {...{ selectedColor, mouseDown }} />
    })}
  </View>
}
*/
const AnimationGenerator = () => {
  const [selectedColor, setSelectedColor] = useState(19)
  const colorKey = Object.keys(colors)[selectedColor]

  const [animation, setAnimation] = useState([
    Array(1024).fill([]).map((a, i) => [i, 19])
  ])

  const [currentFrame, setCurrentFrame] = useState(0)
  const [mouseDown, setMouseDown] = useState(false)


  window.onmousedown = () => {
    setMouseDown(true)
  }

  window.onmouseup = () => {
    setMouseDown(false)
  }

  return <View css={Styles.borderWrapper}>

    <View css={Styles.animationControl}>
      <Text variant='h4' size='large' css={Styles.title} >
        FRAME {currentFrame + 1}
      </Text>
      <View css={Styles.frameWrapper}>
        {<Text variant='h4' size='large' css={Styles.title}
          onClick={() => setCurrentFrame(currentFrame => currentFrame - 1)}
        >
          {currentFrame != 0 && '<'}
        </Text>}
        <ColorContext.Provider value={selectedColor} >
          <View css={Styles.frame}>
            {animation[currentFrame].map((a, i) => {
              return <Block key={`${a}${i}`} index={i} colorNumber={a[1]}
                {...{ mouseDown }} />
            })}
          </View>
        </ColorContext.Provider>

        {(animation.length - 1) > currentFrame && <Text variant='h4' size='large' css={Styles.title}
          onClick={() => setCurrentFrame(currentFrame => currentFrame + 1)}
        >
          {">"}
        </Text>
        }
      </View>
      <Text variant='h4' size='large' css={Styles.title}
        onClick={() => {
          setAnimation(ani => {
            const updatedAnimation = Array.from(ani);
            updatedAnimation.push(ani[currentFrame])
            return updatedAnimation
          })
          setCurrentFrame(currentFrame => currentFrame + 1)
        }
        }>
        ADD FRAME
      </Text>
      <Text variant='h4' size='large' css={Styles.title}
        onClick={() => ''} >
        REMOVE FRAME
      </Text>
    </View>
    <View>
      <Text variant='h4' size='large' css={Styles.title} >
        PREVIEW
      </Text>
      <View css={Styles.preview}>

      </View>
      <View css={Styles.box}>
        <View css={Styles.selectedColor(colors[colorKey])} />
      </View>
      <View css={Styles.colorWrapper}>
        {Object.keys(colors).map((name, index) => {
          return <View key={`${name} ${index} `} css={Styles.color(colors[name], 20)} onClick={() => setSelectedColor(index)} />
        })}
      </View>
      <Text variant='h4' size='large' css={Styles.title} >
        Paint all
      </Text>
      <Text variant='h4' size='large' css={Styles.title} >
        Invert
      </Text>
    </View>
  </View>
}

export default AnimationGenerator
