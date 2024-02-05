import { useAnimations } from '@react-three/drei'
import { useGLTF }       from '@react-three/drei'
import { useThree }      from '@react-three/fiber'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
import { Vector3 }       from 'three'
import { useEffect }     from 'react'
import { useRef }        from 'react'

import { DiamondGltf }   from '../../../assets'
import { GLTFResult }    from './diamond-model.interfaces'
import { GLTFAction }    from './diamond-model.interfaces'
import { ModelProps }    from './diamond-model.interfaces'

export const DiamondModel: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF(DiamondGltf, true) as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)
  const { camera } = useThree()

  useEffect(() => {
    actions.a?.setLoop(2201, Infinity)
    actions.a?.play()
  }, [actions])

  useEffect(() => {
    camera.lookAt(new Vector3(0, -2, 5.7))
  }, [camera])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Cone002'
          geometry={nodes.Cone002.geometry}
          material={materials['Material.017']}
          morphTargetDictionary={nodes.Cone002.morphTargetDictionary}
          morphTargetInfluences={nodes.Cone002.morphTargetInfluences}
          position={[-0.002, -1.298, 5.433]}
          rotation={[-0.306, 0.415, -0.243]}
          scale={0.7}
        />
        <mesh
          name='Cone'
          geometry={nodes.Cone.geometry}
          material={materials['Material.017']}
          morphTargetDictionary={nodes.Cone.morphTargetDictionary}
          morphTargetInfluences={nodes.Cone.morphTargetInfluences}
          position={[-0.006, -1.295, 5.429]}
          rotation={[-0.306, 0.415, -0.243]}
          scale={0.7}
        />
      </group>
    </group>
  )
}
