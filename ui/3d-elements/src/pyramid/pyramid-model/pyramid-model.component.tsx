import { useAnimations } from '@react-three/drei'
import { useGLTF }       from '@react-three/drei'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
import { useEffect }     from 'react'
import { useRef }        from 'react'

import { PyramidGltf }   from '../../../assets'
import { GLTFResult }    from './pyramid-model.interfaces'
import { GLTFAction }    from './pyramid-model.interfaces'
import { ModelProps }    from './pyramid-model.interfaces'

export const PyramidModel: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF(PyramidGltf, true) as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)

  useEffect(() => {
    actions['Key.004Action']?.setLoop(2201, Infinity)
    actions['Key.004Action']?.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Cone001'
          geometry={nodes.Cone001.geometry}
          material={materials['Material.002']}
          morphTargetDictionary={nodes.Cone001.morphTargetDictionary}
          morphTargetInfluences={nodes.Cone001.morphTargetInfluences}
          rotation={[0, 0, -0.261]}
          scale={0.91}
        />
      </group>
    </group>
  )
}
