import { useAnimations } from '@react-three/drei'
import { useGLTF }       from '@react-three/drei'
import { useThree }      from '@react-three/fiber'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
import { Vector3 }       from 'three'
import { useEffect }     from 'react'
import { useRef }        from 'react'

import { PyramidGltf }   from '../../../assets'
import { GLTFResult }    from './pyramid-model.interfaces'
import { GLTFAction }    from './pyramid-model.interfaces'
import { ModelProps }    from './pyramid-model.interfaces'

export const PyramidModel: FC<ModelProps> = ({ showAnimation, ...props }) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF(PyramidGltf, true) as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)
  const { camera } = useThree()

  useEffect(() => {
    if (!actions['Key.009Action']?.enabled) {
      actions['Key.009Action']?.stop()
    }

    actions['Key.009Action']?.setLoop(2201, showAnimation ? Infinity : 1)
    actions['Key.009Action']?.play()
  }, [actions, showAnimation])

  useEffect(() => {
    camera.lookAt(new Vector3(1.63, 3.386, -1.994))
  }, [camera])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Cone001'
          geometry={nodes.Cone001.geometry}
          material={materials['Material.002']}
          morphTargetDictionary={nodes.Cone001.morphTargetDictionary}
          morphTargetInfluences={nodes.Cone001.morphTargetInfluences}
          position={[1.63, 3.386, -1.994]}
          rotation={[0, 0, -0.261]}
          scale={0.91}
        />
      </group>
    </group>
  )
}
