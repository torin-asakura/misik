import { AnimationClip }        from 'three'
import { Mesh }                 from 'three'
import { MeshStandardMaterial } from 'three'
import { GLTF }                 from 'three-stdlib'

export type ModelProps = JSX.IntrinsicElements['group']

export interface GLTFAction extends AnimationClip {
  name: 'a'
}

export interface GLTFResult extends GLTF {
  nodes: {
    Cone002: Mesh
    Cone: Mesh
  }
  materials: {
    ['Material.017']: MeshStandardMaterial
  }
  animations: GLTFAction[]
}
