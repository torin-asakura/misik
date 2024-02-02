import { useAnimations } from '@react-three/drei'
import { useGLTF }       from '@react-three/drei'
import { useThree }      from '@react-three/fiber'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
import { Vector3 }       from 'three'
import { useEffect }     from 'react'
import { useRef }        from 'react'

import { PillGltf }      from '../../../assets'
import { GLTFResult }    from './pill-model.interfaces'
import { GLTFAction }    from './pill-model.interfaces'
import { ModelProps }    from './pill-model.interfaces'

export const PillModel: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF(PillGltf, true) as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)
  const { camera } = useThree()

  useEffect(() => {
    camera.lookAt(new Vector3(0.06, 0.2, 0))

    actions['a']?.setLoop(2201, Infinity)
    actions['a']?.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene' rotation={[0, Math.PI / 2, 0]}>
        <mesh
          name='Sphere001'
          geometry={nodes.Sphere001.geometry}
          material={materials['Material.003']}
          morphTargetDictionary={nodes.Sphere001.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere001.morphTargetInfluences}
          position={[0.035, 0.111, 0]}
          rotation={[-0.01, 0, -0.318]}
          scale={0.7}
        />
        <mesh
          name='Sphere002'
          geometry={nodes.Sphere002.geometry}
          material={materials['Material.003']}
          morphTargetDictionary={nodes.Sphere002.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere002.morphTargetInfluences}
          position={[0.092, 0.313, 0]}
          rotation={[0, 0, -Math.PI / 9]}
          scale={0.7}
        />
      </group>
    </group>
  )
}
