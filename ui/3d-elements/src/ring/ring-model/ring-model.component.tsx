import { useAnimations } from '@react-three/drei'
import { useGLTF }       from '@react-three/drei'
import { useThree }      from '@react-three/fiber'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
import { Vector3 }       from 'three'
import { useEffect }     from 'react'
import { useRef }        from 'react'

import { RingGltf }      from '../../../assets'
import { GLTFResult }    from './ring-model.interfaces'
import { GLTFAction }    from './ring-model.interfaces'
import { ModelProps }    from './ring-model.interfaces'

export const RingModel: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF(RingGltf, true) as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)
  const { camera } = useThree()

  useEffect(() => {
    camera.lookAt(new Vector3(1.231, -2.188, -1.774))

    actions['a']?.setLoop(2201, Infinity)
    actions['hyi.001']?.setLoop(2201, Infinity)
    actions['a']?.play()
    actions['hyi.001']?.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Torus003'
          geometry={nodes.Torus003.geometry}
          material={materials['Material.011']}
          morphTargetDictionary={nodes.Torus003.morphTargetDictionary}
          morphTargetInfluences={nodes.Torus003.morphTargetInfluences}
          position={[1.231, -2.188, -1.774]}
          rotation={[0, -1.571, 0]}
          scale={1.578}
        />
        <mesh
          name='Torus002'
          geometry={nodes.Torus002.geometry}
          material={materials['Material.011']}
          morphTargetDictionary={nodes.Torus002.morphTargetDictionary}
          morphTargetInfluences={nodes.Torus002.morphTargetInfluences}
          position={[1.231, -2.188, -1.774]}
          rotation={[0, -1.571, 0]}
          scale={1.578}
        />
        <mesh
          name='Torus001'
          geometry={nodes.Torus001.geometry}
          material={materials['Material.011']}
          morphTargetDictionary={nodes.Torus001.morphTargetDictionary}
          morphTargetInfluences={nodes.Torus001.morphTargetInfluences}
          position={[1.231, -2.188, -1.774]}
          rotation={[0, -1.571, 0]}
          scale={1.578}
        />
      </group>
    </group>
  )
}
