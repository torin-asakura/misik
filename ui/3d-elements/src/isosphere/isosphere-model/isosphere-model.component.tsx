import { useAnimations } from '@react-three/drei'
import { useGLTF }       from '@react-three/drei'
import { useThree }      from '@react-three/fiber'

import React             from 'react'
import { FC }            from 'react'
import { Group }         from 'three'
import { Vector3 }       from 'three'
import { useEffect }     from 'react'
import { useRef }        from 'react'

import { IsosphereGltf } from '../../../assets'
import { GLTFResult }    from './isosphere-model.interfaces'
import { GLTFAction }    from './isosphere-model.interfaces'
import { ModelProps }    from './isosphere-model.interfaces'

export const IsosphereModel: FC<ModelProps> = (props) => {
  const group = useRef<Group>(null)
  const { nodes, materials, animations } = useGLTF(IsosphereGltf, true) as unknown as GLTFResult
  const { actions } = useAnimations<GLTFAction>(animations, group)
  const { camera } = useThree()

  useEffect(() => {
    actions.a?.setLoop(2201, Infinity)
    actions.a?.play()
  }, [actions])

  useEffect(() => {
    camera.lookAt(new Vector3(0, -2.133, 2.32))
  }, [camera])

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='Icosphere019'
          geometry={nodes.Icosphere019.geometry}
          material={materials['Material.007']}
          position={[0, -2.233, 2.32]}
        />
        <mesh
          name='Icosphere018'
          geometry={nodes.Icosphere018.geometry}
          material={materials['Material.007']}
          position={[0.026, -2.205, 2.333]}
        />
        <mesh
          name='Icosphere017'
          geometry={nodes.Icosphere017.geometry}
          material={materials['Material.007']}
          position={[0.026, -2.205, 2.333]}
        />
        <mesh
          name='Icosphere016'
          geometry={nodes.Icosphere016.geometry}
          material={materials['Material.007']}
          position={[0, -2.233, 2.32]}
        />
        <mesh
          name='Icosphere015'
          geometry={nodes.Icosphere015.geometry}
          material={materials['Material.007']}
          position={[0, -2.233, 2.32]}
        />
        <mesh
          name='Icosphere014'
          geometry={nodes.Icosphere014.geometry}
          material={materials['Material.007']}
          position={[0, -2.233, 2.32]}
        />
        <mesh
          name='Icosphere013'
          geometry={nodes.Icosphere013.geometry}
          material={materials['Material.007']}
          position={[0.026, -2.205, 2.333]}
        />
        <mesh
          name='Icosphere012'
          geometry={nodes.Icosphere012.geometry}
          material={materials['Material.007']}
          position={[0.026, -2.205, 2.333]}
        />
        <mesh
          name='Icosphere011'
          geometry={nodes.Icosphere011.geometry}
          material={materials['Material.007']}
          position={[0.026, -2.205, 2.333]}
        />
        <mesh
          name='Icosphere010'
          geometry={nodes.Icosphere010.geometry}
          material={materials['Material.007']}
          position={[0.026, -2.205, 2.333]}
        />
        <mesh
          name='Icosphere009'
          geometry={nodes.Icosphere009.geometry}
          material={materials['Material.007']}
          position={[0.026, -2.205, 2.333]}
        />
        <mesh
          name='Icosphere008'
          geometry={nodes.Icosphere008.geometry}
          material={materials['Material.007']}
          position={[-0.031, -2.233, 2.238]}
        />
        <mesh
          name='Icosphere007'
          geometry={nodes.Icosphere007.geometry}
          material={materials['Material.007']}
          position={[-0.025, -2.233, 2.32]}
        />
        <mesh
          name='Icosphere006'
          geometry={nodes.Icosphere006.geometry}
          material={materials['Material.007']}
          position={[0, -2.233, 2.32]}
        />
        <mesh
          name='Icosphere005'
          geometry={nodes.Icosphere005.geometry}
          material={materials['Material.007']}
          position={[0, -2.233, 2.32]}
        />
        <mesh
          name='Icosphere004'
          geometry={nodes.Icosphere004.geometry}
          material={materials['Material.007']}
          position={[0, -2.233, 2.32]}
        />
        <mesh
          name='Icosphere003'
          geometry={nodes.Icosphere003.geometry}
          material={materials['Material.007']}
          position={[0, -2.233, 2.32]}
        />
        <mesh
          name='Icosphere002'
          geometry={nodes.Icosphere002.geometry}
          material={materials['Material.007']}
          position={[0, -2.233, 2.32]}
        />
        <mesh
          name='Icosphere001'
          geometry={nodes.Icosphere001.geometry}
          material={materials['Material.007']}
          morphTargetDictionary={nodes.Icosphere001.morphTargetDictionary}
          morphTargetInfluences={nodes.Icosphere001.morphTargetInfluences}
          position={[0, -2.233, 2.32]}
        />
        <mesh
          name='Icosphere'
          geometry={nodes.Icosphere.geometry}
          material={materials['Material.007']}
          position={[0.026, -2.205, 2.333]}
        />
      </group>
    </group>
  )
}
