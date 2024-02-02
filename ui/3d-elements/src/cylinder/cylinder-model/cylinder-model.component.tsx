import { useAnimations } from '@react-three/drei'
import { useGLTF }       from '@react-three/drei'
import { useThree }      from '@react-three/fiber'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
import { Vector3 }       from 'three'
import { useEffect }     from 'react'
import { useRef }        from 'react'

import { CylinderGltf }  from '../../../assets'
import { GLTFResult }    from './cylinder-model.interfaces'
import { GLTFAction }    from './cylinder-model.interfaces'
import { ModelProps }    from './cylinder-model.interfaces'

export const CylinderModel: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF(CylinderGltf, true) as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)
  const { camera } = useThree()

  useEffect(() => {
    actions.a?.setLoop(2201, Infinity)
    actions.a?.play()
  }, [actions])

  useEffect(() => {
    camera.lookAt(new Vector3(0, -2.139, -5.333))
  }, [camera])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Cylinder001'
          geometry={nodes.Cylinder001.geometry}
          material={materials['Material.001']}
          morphTargetDictionary={nodes.Cylinder001.morphTargetDictionary}
          morphTargetInfluences={nodes.Cylinder001.morphTargetInfluences}
          position={[0, -2.134, -5.336]}
          rotation={[-Math.PI / 6, 0, 0]}
          scale={[0.502, 1.001, 0.453]}
        />
        <mesh
          name='Cylinder'
          geometry={nodes.Cylinder.geometry}
          material={materials['Material.001']}
          morphTargetDictionary={nodes.Cylinder.morphTargetDictionary}
          morphTargetInfluences={nodes.Cylinder.morphTargetInfluences}
          position={[0, -2.139, -5.333]}
          rotation={[-Math.PI / 6, 0, 0]}
          scale={[0.502, 1.001, 0.453]}
        />
      </group>
    </group>
  )
}
