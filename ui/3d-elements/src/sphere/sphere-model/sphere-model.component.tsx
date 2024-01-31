import { useAnimations } from '@react-three/drei'
import { useGLTF }       from '@react-three/drei'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
import { useEffect }     from 'react'
import { useRef }        from 'react'

import { SphereGltf }    from '../../../assets'
import { GLTFResult }    from './sphere-model.interfaces'
import { GLTFAction }    from './sphere-model.interfaces'
import { ModelProps }    from './sphere-model.interfaces'

export const SphereModel: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF(SphereGltf, true) as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)

  useEffect(() => {
    actions['Key.004Action']?.setLoop(2201, Infinity)
    actions['Key.004Action']?.play()
  }, [actions])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Sphere'
          geometry={nodes.Sphere.geometry}
          material={materials['Material.007']}
          morphTargetDictionary={nodes.Sphere.morphTargetDictionary}
          morphTargetInfluences={nodes.Sphere.morphTargetInfluences}
          scale={0.509}
        />
      </group>
    </group>
  )
}
