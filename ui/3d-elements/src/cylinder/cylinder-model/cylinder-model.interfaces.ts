import { GroupProps }           from '@react-three/fiber'

import { AnimationClip }        from 'three'
import { Mesh }                 from 'three'
import { MeshStandardMaterial } from 'three'
import { GLTF }                 from 'three-stdlib'

export interface ModelProps extends GroupProps {
  showAnimation?: boolean
}

export interface GLTFAction extends AnimationClip {
  name: 'a'
}

export interface GLTFResult extends GLTF {
  nodes: {
    Cylinder001: Mesh
    Cylinder: Mesh
  }
  materials: {
    ['Material.001']: MeshStandardMaterial
  }
  animations: GLTFAction[]
}
