import { GroupProps }           from '@react-three/fiber'

import { AnimationClip }        from 'three'
import { Mesh }                 from 'three'
import { MeshStandardMaterial } from 'three'
import { GLTF }                 from 'three-stdlib'

export interface ModelProps extends GroupProps {
  showAnimation?: boolean
}

export interface GLTFAction extends AnimationClip {
  name: 'a' | 'hyi.001'
}

export interface GLTFResult extends GLTF {
  nodes: {
    Torus003: Mesh
    Torus002: Mesh
    Torus001: Mesh
  }
  materials: {
    ['Material.011']: MeshStandardMaterial
  }
  animations: GLTFAction[]
}
