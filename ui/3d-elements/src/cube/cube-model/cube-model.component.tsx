import { useAnimations } from '@react-three/drei'
import { useGLTF }       from '@react-three/drei'
import { useThree }      from '@react-three/fiber'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
import { Vector3 }       from 'three'
import { useEffect }     from 'react'
import { useRef }        from 'react'

import { CubeGltf }      from '../../../assets'
import { GLTFResult }    from './cube-model.interfaces'
import { GLTFAction }    from './cube-model.interfaces'
import { ModelProps }    from './cube-model.interfaces'

export const CubeModel: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF(CubeGltf, true) as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)
  const { camera } = useThree()

  useEffect(() => {
    actions['CubeAction.001']?.setLoop(2201, Infinity)
    actions['Key.008Action']?.setLoop(2201, Infinity)
    actions['CubeAction.001']?.play()
    actions['Key.008Action']?.play()
  }, [actions])

  useEffect(() => {
    camera.lookAt(new Vector3(1.375, 3.425, 1.811))
  }, [camera])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Cube'
          geometry={nodes.Cube.geometry}
          material={materials['Material.002']}
          morphTargetDictionary={nodes.Cube.morphTargetDictionary}
          morphTargetInfluences={nodes.Cube.morphTargetInfluences}
          position={[1.375, 3.425, 1.811]}
          rotation={[-0.42, 0.003, 0.001]}
          scale={[0.395, 0.973, 0.442]}
        />
      </group>
    </group>
  )
}
