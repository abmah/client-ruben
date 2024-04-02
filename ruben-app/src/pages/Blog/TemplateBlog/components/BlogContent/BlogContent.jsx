import "./blog-content.css";
import Writer from "./writer.png";
import LinkedIn from "./linkedin.svg";

import BoxImage from "./box.jpg";
import FigureOne from "./figure-one.png";
import FigureTwo from "./figure-two.png";
function BlogContent() {
  return (
    <div className="blog-content-wrapper">
      <div className="blog-content-container">
        <div className="blog-content-left-section">
          <div className="blog-content-left-section-writer">
            <img src={Writer} alt="writer" />
            <div>By Johnathon Doe</div>
          </div>
          <div className="blog-content-left-section-category">
            <div>Business & Tech</div>
          </div>
          <div className="blog-content-left-section-social">
            <a href="#">
              <img src={LinkedIn} alt="linked-in" />
            </a>
          </div>
        </div>
        <div className="blog-content-right-section">
          <img className="blog-content-image" src={BoxImage} alt="blog-image" />
          <h1>What is Container Security</h1>
          <p>
            Containerized application workloads are often more complex than
            traditional application workloads, and therefore deploying such
            workloads in a production environment may involve launching a large
            number of containers, as a result, system administrators and
            security specialists need more time and effort, along with more
            complex procedures to secure containerized workloads compared to
            traditional workloads. Container security is the process of
            implementing and maintaining security controls that protect
            containers and their underlying infrastructure during the
            application development lifecycle, and therefore those processes
            need to be integrated into the development pipeline to ensure that
            all application components are secure from the initial development
            phase until the end of development lifecycle.
          </p>

          <h1>Container Security Challenges</h1>
          <p>
            While the process of containerizing applications has its own
            benefits, it introduces security challenges that sometimes could be
            difficult to overcome, some of those challenges are:
          </p>
          <ol>
            <li>Larger Attack Surface of Containerized Applications</li>
            <p>
              Because a containerized application may need to launch a large
              number of containers derived from the same base images, for
              example a web server image, and if that particular base image has
              known vulnerabilities, then all containers based on that image
              will inherit the vulnerability, and therefore the attack surface
              is multiplied by the number of containers. Similarly, when
              containers are based on different base images, for example two web
              server images derived from different operating system releases,
              then the attack surface will be proportional to the total number
              of vulnerabilities in all base images combined.
            </p>
            <li>Shared Kernel Architecture</li>
            <p>
              Since the container host’s kernel is shared by all containers
              running on it by design, additional configuration is required to
              limit container permissions and ensure proper isolation of
              containers. For example, containers by default have access to the
              host’s network, where the internet or other private networks might
              be reachable, and in most cases containers of a microservices
              application are only supposed to interact with each other within
              an isolated network, therefore configuring container network
              isolation is necessary and this can be achieved by creating an
              isolated Docker networks when launching containers with
              docker-compose, or creating a network policy in Kubernetes.
              Another example is the default kernel capabilities assigned by
              Docker when launching containers, such as CAP_NET_RAW, where this
              capability is not needed for most application containers to
              function properly, and therefore can be removed.
            </p>
            <li>Visibility in a Dynamic Environment</li>
            <p>
              Because containerized workloads are highly dynamic and their
              orchestration platforms abstract the underlying infrastructure
              including the network, traditional monitoring tools may not be
              able to see which containers are running, what they are running,
              or analyze their network behavior. For example, containers
              communicate with each other over network overlays managed by the
              container orchestration platform, and therefore traditional
              network monitoring tools that analyze network flows going through
              the container’s host network interfaces, or through network
              infrastructure devices, will not be able to monitor the required
              network metrics.
            </p>
          </ol>
          <h1>Container Security Best Practices</h1>
          <ol>
            <li>Securing Images</li>
            <ul>
              <li>
                <p>
                  <strong>
                    Include as little as possible in the container image{" "}
                  </strong>
                  by removing all components that the application doesn’t need,
                  where each additional tool or library included in the image
                  possesses a potential threat, and therefore those threats can
                  be mitigated by including the application as a statically
                  compiled binary that include all of its dependencies.
                </p>
              </li>
              <li>
                <p>
                  <strong> Use trustworthy images </strong> If the application
                  container is not built from scratch and is based on an image,
                  then the base image needs to be chosen from a trustworthy
                  source as public image repositories, such as Docker Hub, can
                  be used by anyone to host images that might include malware.
                </p>{" "}
              </li>
            </ul>

            <li>Securing Container Registries</li>

            <ul>
              <li>
                <p>
                  Use access control with private registries to define who can
                  access and publish images, this can be easily achieved with
                  IAM and RBAC when using container registry services available
                  from public cloud providers. For example, developers should
                  only be able to push and pull images to specific repositories
                  within the registry, but shouldn’t be able to modify the
                  registry configuration.
                </p>{" "}
              </li>
              <li>
                <p>
                  Sign images to help end users with verifying the origin of
                  images, ensuring the authenticity and integrity of the code
                  within the image. This can be accomplished with tools like
                  <a href="https://github.com/sigstore/cosign"> cosign</a>,{" "}
                  <a href="https://docs.docker.com/engine/security/trust/">
                    {" "}
                    Docker Content Trust (DCT)
                  </a>
                  , and <a href="https://notaryproject.dev/">Notary</a> .
                </p>{" "}
              </li>
              <li>
                <p>
                  Scan images for vulnerabilities using the vulnerability
                  scanning facility built into some container registries, or an
                  external vulnerability scanning tool like{" "}
                  <a href="https://github.com/aquasecurity/trivy">Trivy</a>
                </p>
              </li>
              <li>
                Prune registries of unsafe and vulnerable images that should no
                longer be used.
              </li>
              <p>
                This can be automated with time triggers or labels associated
                with images.
              </p>
            </ul>

            <li>Securing Deployment</li>
            <ul>
              <li>
                <p>
                  <strong> Secure the target environment</strong> by hardening
                  the container host operating system or using a purpose built
                  container-optimized operating system such as{" "}
                  <a href="https://www.flatcar.org/">Flatcar</a> or{" "}
                  <a href="https://fedoraproject.org/coreos/">Fedora CoreOS</a>
                </p>
              </li>
              <li>
                <p>
                  <strong> Use orchestration platforms</strong> as they provide
                  features like secrets management, RBAC, resource isolation
                  (with namespaces and network policies), audit logging and
                  monitoring.
                </p>
              </li>
              <li>
                <p>
                  <strong> Use immutable deployments</strong> as they completely
                  eliminate vulnerabilities in older versions of dependencies,
                  unlike the typical process of patching the application
                  in-place which might leave older vulnerable dependencies in
                  the container
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Refer to specific versions of images during deployment
                  </strong>{" "}
                  using version tags, such as “app:1.2.3”, to ensure that
                  specific and known good images are being deployed.
                </p>
              </li>
              <li>
                <p>
                  <strong>
                    Separate deployment of workloads with different sensitivity
                    levels{" "}
                  </strong>
                  as orchestration platforms may place them by default on the
                  same host. This can be achieved by utilizing the orchestration
                  platform scheduling features, such as node selectors and
                  affinity rules, or simply by having separate clusters for each
                  sensitivity level.
                </p>
              </li>
            </ul>
            <br />
            <br />
            <img
              className="blog-content-image blog-figure-image"
              src={FigureOne}
              alt="blog-image"
            />
            <li>Securing Container Runtime</li>
            <ul>
              <li>
                <p>
                  Create separate virtual networks for each application to
                  isolate its containers and restrict connectivity to be only
                  within the virtual network. This can be easily achieved in a
                  container orchestration platform through the use of the
                  network policy feature provided by some CNI plugins such as
                  <a href="https://www.tigera.io/project-calico/"> Calico</a>
                </p>{" "}
              </li>
              <br />
              <br />
              <img
                className="blog-content-image blog-figure-image blog-figure-image-two"
                src={FigureTwo}
                alt="blog-image"
              />
              <li>
                <p>
                  Only expose ports that serve the application This rule also
                  applies to the container host itself.
                </p>
              </li>
              <li>
                <p>
                  Use TLS to secure communications between services which
                  encrypts traffic and only allows authorized endpoints to
                  connect. This can be easily achieved in a container
                  orchestration platform through the use of a service mesh such
                  as <a href="https://istio.io/">Istio</a>
                </p>
              </li>
              <li>
                <p>
                  Run containers with their root filesystem in read-only mode
                  and use “tmpfs” to restrict non-persistent writes to specific
                  directories.
                </p>
              </li>
            </ul>
            <li>Monitoring Container Activity</li>
            <p>
              As containerized workloads are highly dynamic, where many
              containers may get launched from the same or different images and
              new versions of those image may get introduced at a high-pace, it
              is critical to identify security or other operational issues
              quickly and remediate them at the source, therefore containerized
              workloads require a granular level of monitoring to provide
              visibility for IT and security teams into elements running in the
              environment where monitoring tools can help with identifying
              anomalous behavior and respond to events in a timely manner. For
              example, the timely identification of a faulty or vulnerable image
              insures the ability to fix the image and rebuild all containers
              based on it
            </p>
          </ol>
          <h1>Common Container Security Mistakes to Avoid</h1>
          <ol>
            <li>Failure to Implement Basic Security Practices</li>
            <p>
              Even though containers are relatively a new technology which
              requires the implementation of new security practices and tools,
              certain basic security principles and practices still apply, such
              as keeping operating systems and container runtimes updated and
              patched.
            </p>
            <li>Failure to Implement Logging, Monitoring, and Testing</li>

            <p>
              Especially for highly distributed systems spanning multiple or
              hybrid clouds, as this would result in loss of visibility into the
              health of applications and environments leading to critical
              security risks.
            </p>
            <li>Failure to Secure all Stages of CI/CD Pipelines</li>
            <p>
              if security testing is performed only at the end of the
              development lifecycle, that would result in unnecessary delays
              with the deployment of application releases to production. Those
              delays can be eliminated by implementing security early in the
              development lifecycle and the use of appropriate security tools at
              every stage within the pipeline.
            </p>
          </ol>
          <p>
            By avoiding those common mistakes and following container security
            best practices, the risk of security breaches can be significantly
            decreased for a containerized application and its infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
