import { useAnimations } from '@react-three/drei'
import { useGLTF }       from '@react-three/drei'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
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

  useEffect(() => {
    actions['a']?.setLoop(2201, Infinity)
    actions['a']?.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Sphere001'
          geometry={nodes.Sphere001.geometry}
          material={materials['Material.003']}
          morphTargetDictionary={nodes.Sphere001.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere001.morphTargetInfluences}
          rotation={[-0.01, 0, -0.318]}
          scale={0.7}
        />
        <mesh
          name='Sphere002'
          geometry={nodes.Sphere002.geometry}
          material={materials['Material.003']}
          morphTargetDictionary={nodes.Sphere002.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere002.morphTargetInfluences}
          rotation={[0, 0, -Math.PI / 9]}
          scale={0.7}
        />
      </group>
    </group>
  )
}
